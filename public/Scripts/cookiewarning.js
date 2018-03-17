﻿(function (a) {
	fp_cookie = {
		width: 970,
		showing: false,
		parentElement: null,
		init: function () {
			var b = parseInt(a.fp_cookie.checkCookie(), 0);
			if (isNaN(b)) {
				b = 0
			}
			if (b < 3) {
				a.fp_cookie.displayMessage();
				a.fp_cookie.writeCookie(b + 1)
			}
		},
		displayMessage: function () {
			a.fp_cookie.showing = true;
			dimensions = a.fp_cookie.getViewPortDimensions();
			messageLeftMargin = Math.ceil(a.fp_cookie.getWidth() / 2);
			messageContainer = document.createElement("div");
			messageContainer.setAttribute("id", "fp_cookieMessageContainer");
			messageContainer = a.fp_cookie.addCSSRules(messageContainer, "z-index: 16777271; position: fixed; left: 50%; bottom: 0px; width: " + this.width + "px; margin-left: -" + messageLeftMargin + "px;height: 30px; line-height: 30px; border: none; background-color: #f5dd88; color: #000; overflow: hidden; text-align: center; font-size: 12px; font-family: arial; padding: 0;");
			messageContainer.innerHTML = 'We use cookies on this website. By using this site, you agree that we may store and access cookies on your device.  Find out more and set your preferences <a href="/cookies" target="_blank" style="color: #000; font-weight: bold; text-decoration: none; border-bottom: 1px solid #000;">here</a>.';
			messageClose = document.createElement("a");
			messageClose.setAttribute("id", "fp_cookieMessageCloseButton");
			messageClose.setAttribute("href", "#null");
			messageClose = a.fp_cookie.addCSSRules(messageClose, "display: block; width: 30px; height: 30px; background-color: #b48d04; border: none; color: #FFF; font-size: 20px; line-height: 30px; text-decoration: none; position: absolute; right: 0; top: 0;");
			messageClose.innerHTML = "&#215;";
			messageContainer.appendChild(messageClose);
			a.fp_cookie.parentElement = a.fp_cookie.getCookieContainerDiv();
			a.fp_cookie.parentElement.appendChild(messageContainer);
			a.fp_cookie.addEvent(messageClose, "click", function (b) {
				if (typeof a.event != "undefined") {
					if (a.event.preventDefault) {
						a.event.preventDefault()
					}
					a.event.returnValue = false
				}
				return a.fp_cookie.closeMessage()
			})
		},
		getCookieContainerDiv: function () {
			wrapperIds = ["future_company_footer", "wrapper", "container", "core_wrapper", "footer", "header"];
			for (i = 0; i < wrapperIds.length; i++) {
				element = document.getElementById(wrapperIds[i]);
				if (typeof element !== "undefined" && element != null) {
					display = a.fp_cookie.getStyle(element, "display");
					if (display !== "none") {
						return element
					}
				}
			}
			divs = document.getElementsByTagName("div");
			for (i = 0; i < divs.length; i++) {
				display = a.fp_cookie.getStyle(divs[i], "display");
				if (display !== "none" && divs[i].parentNode.tagName.toUpperCase() == "BODY") {
					return divs[i]
				}
			}
		},
		getStyle: function (b, d) {
			if (b.currentStyle) {
				return b.currentStyle[d]
			} else {
				if (document.defaultView && document.defaultView.getComputedStyle) {
					return document.defaultView.getComputedStyle(b, "")[d]
				} else {
					return b.style[d]
				}
			}
		},
		closeMessage: function () {
			a.fp_cookie.writeCookie(5);
			ele = document.getElementById("fp_cookieMessageContainer");
			a.fp_cookie.parentElement.removeChild(ele);
			return false
		},
		getWidth: function () {
			width = 970;
			wrapperIds = ["wrapper", "container", "core_wrapper", "footer", "header"];
			ele = null;
			for (i = 0; i < wrapperIds.length; i++) {
				element = document.getElementById(wrapperIds[i]);
				if (typeof element !== "undefined" && element != null) {
					ele = wrapperIds[i];
					break
				}
			}
			if (ele !== null) {
				eleWidth = document.getElementById(wrapperIds[i]).offsetWidth;
				if (eleWidth > 800 && eleWidth < 1400) {
					a.fp_cookie.width = eleWidth
				}
			}
			return a.fp_cookie.width
		},
		addCSSRules: function (b, d) {
			if (typeof b == "object") {
				if (typeof b.style.cssText !== "undefined") {
					b.style.cssText = d
				} else {
					b.setAttribute("style", d)
				}
			}
			return b
		},
		getViewPortDimensions: function () {
			if (typeof a.innerWidth != "undefined") {
				viewportwidth = a.innerWidth;
				viewportheight = a.innerHeight
			} else {
				if (typeof document.documentElement != "undefined" && typeof document.documentElement.clientWidth != "undefined" && document.documentElement.clientWidth != 0) {
					viewportwidth = document.documentElement.clientWidth;
					viewportheight = document.documentElement.clientHeight
				} else {
					viewportwidth = document.getElementsByTagName("body")[0].clientWidth;
					viewportheight = document.getElementsByTagName("body")[0].clientHeight
				}
			}
			return {
				width: viewportwidth,
				height: viewportheight
			}
		},
		writeCookie: function (b) {
			date = new Date();
			date.setTime(date.getTime() + (730 * 24 * 60 * 60 * 1000));
			expires = "; expires=" + date.toGMTString();
			document.cookie = "fp_cookieWarningSeen=" + b + expires + "; path=/"
		},
		checkCookie: function () {
			nameEQ = "fp_cookieWarningSeen=";
			cookie = document.cookie.split(";");
			for (var b = 0; b < cookie.length; b++) {
				c = cookie[b];
				while (c.charAt(0) == " ") {
					c = c.substring(1, c.length)
				}
				if (c.indexOf(nameEQ) == 0) {
					return c.substring(nameEQ.length, c.length)
				}
			}
			return null
		},
		addEvent: function (e, d, b) {
			if (e.addEventListener) {
				e.addEventListener(d, b, false)
			} else {
				if (e.attachEvent) {
					e["e" + d + b] = b;
					e[d + b] = function () {
						e["e" + d + b](a.event)
					};
					e.attachEvent("on" + d, e[d + b])
				} else {
					e["on" + d] = e["e" + d + b]
				}
			}
		}
	};
	a.fp_cookie.addEvent(a, "load", function () {
		a.fp_cookie.init()
	})
})(window);