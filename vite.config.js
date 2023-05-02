import { defineConfig } from 'vite';
import * as path from 'path';
import outputManifest from 'rollup-plugin-output-manifest';
import copy from 'rollup-plugin-copy';

const assets = {
  base: 'resources',
  scripts: 'resources/scripts',
  styles: 'resources/styles',
};

const formatName = (name) =>
  name.replace(`${assets.scripts}/`, '').replace(/.css$/gm, '');

export default defineConfig(({ mode }) => {
  const dev = mode === 'development';
  const config = {
    appType: 'custom',
    publicDir: false,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, assets.base),
        '@scripts': path.resolve(__dirname, assets.scripts),
        '@styles': path.resolve(__dirname, assets.styles),
      },
    },
    css: {
      devSourcemap: true,
    },
    build: {
      sourcemap: 'inline',
      manifest: false,
      outDir: 'public',
      assetsDir: '',
      rollupOptions: {
        input: {
          app: path.resolve(__dirname, `${assets.scripts}/app.js`),
          editor: path.resolve(__dirname, `${assets.scripts}/editor.js`),
        },
        output: {
          sourcemap: false,
        },
        plugins: [
          outputManifest({
            fileName: 'manifest.json',
            generate: (keyValueDecorator, seed, opt) => (chunks) =>
              chunks.reduce((manifest, { name, fileName }) => {
                return name
                  ? {
                      ...manifest,
                      ...keyValueDecorator(formatName(name), fileName, opt),
                    }
                  : manifest;
              }, seed),
          }),
          outputManifest({
            fileName: 'entrypoints.json',
            nameWithExt: true,
            generate: (_, seed) => (chunks) =>
              chunks.reduce((manifest, { name, fileName }) => {
                const output = {};
                const js = manifest[name] ? manifest[name].js : [];
                const css = manifest[name] ? manifest[name].css : [];
                const dependencies = manifest[name]
                  ? manifest[name].dependencies
                  : [];

                fileName.match(/.js$/gm) && js.push(fileName);
                fileName.match(/.css$/gm) && css.push(fileName);

                name && (output[formatName(name)] = { js, css, dependencies });

                return {
                  ...manifest,
                  ...output,
                };
              }, seed),
          }),
          copy({
            copyOnce: true,
            hook: 'writeBundle',
            targets: [
              {
                src: path.resolve(__dirname, `${assets.base}/images/**/*`),
                dest: 'public/images',
              },
              {
                src: path.resolve(__dirname, `${assets.base}/svg/**/*`),
                dest: 'public/svg',
              },
              {
                src: path.resolve(__dirname, `${assets.base}/fonts/**/*`),
                dest: 'public/fonts',
              },
            ],
          }),
        ],
      },
    },
  };

  if (dev) {
    config.server = {
      host: 'localhost',
      port: 3000,
      strictPort: true,
      fs: {
        strict: true,
        allow: ['node_modules', assets.base],
      },
    };
  }

  return config;
});
