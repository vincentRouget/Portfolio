import React, { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";

const Texte = () => {
    const { refresh, setRefresh } = useContext(UserContext);

    useEffect(() => {
        var TxtRotate = function (el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };

        TxtRotate.prototype.tick = function () {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];
            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }
            this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
            var that = this;
            var delta = 150;
            if (this.isDeleting) { delta /= 2; }
            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 1000;
            }
            setTimeout(function () {
                that.tick();
            }, delta);
        };

        const initTxtRotate = () => {
            var elements = document.getElementsByClassName('txt-rotate');
            for (var i = 0; i < elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-rotate');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                    new TxtRotate(elements[i], JSON.parse(toRotate), period);
                }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            document.body.appendChild(css);
            setRefresh(false);
        };

        initTxtRotate();

        return () => {
            // Cleanup if necessary
            setRefresh(false);
        };
    }, [refresh, setRefresh]);

    return (
        <div className='Texte'>
            <p>
                {/* Texte fixe */}
                <span
                    className="txt-rotate"
                    data-period="1000"
                    data-rotate='[ "Web", "Front-end", "Back-end", "Mobile", "# Passionate"]'>
                </span>
                <span className='cursor'>&#10072;</span>
            </p>
        </div>
    );
};

export default Texte;
