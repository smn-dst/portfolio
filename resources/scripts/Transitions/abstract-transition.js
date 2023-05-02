import Highway from '@dogstudio/highway';

export default class AbstractTransition extends Highway.Transition {
    in({ from, to, trigger, done })
    {
        this.goIn({
            from,
            to,
            trigger,
        })
        .then(done)
        .catch((e) => {
            console.error(e);
        });
    }

    out({ from, trigger, done })
    {
        this.goOut({
            from,
            trigger,
        })
        .then(done)
        .catch((e) => {
            console.error(e);
        });
    }

  /**
   * Starts the animation to enter the destination page.
   *
   * @param {Object} params An object with the transition parameters.
   * @param {Element} params.from The page the user is leaving.
   * @param {Element} params.to The page the user is arriving to (the destination page).
   * @param {Object} params.trigger The trigger from highway.
   *
   * @abstract You **must** override this method !
   * @returns {Promise} A Promise to resolve when your animation is completed.
   */
    goIn({ from, to, trigger })
    {
        return new Promise((resolve, reject) => {
            reject(
                new Error(
                    'Transition: "goIn" method must be implemented by subclass and return a Promise !'
                )
            );
        });
    }

  /**
   * Starts the animation to leave the from page.
   *
   * @param {Object} params An object with the transition parameters.
   * @param {Element} params.from The page the user is leaving.
   * @param {Object} params.trigger The trigger from highway.
   *
   * @abstract You **must** override this method !
   * @returns {Promise} A Promise to resolve when your animation is completed.
   */
    goOut({ from, trigger })
    {
        return new Promise((resolve, reject) => {
            reject(
                new Error(
                    'Transition: "goOut" method must be implemented by subclass and return a Promise !'
                )
            );
        });
    }
}
