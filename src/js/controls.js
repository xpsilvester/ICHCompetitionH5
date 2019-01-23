(function () {

    function isMobile() {
        if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|SymbianOS)/i))) {
            return true;
        }
        return false;
    }

    /**
     * Check if element has the specific ancestor
     * @param {Element} ele this element
     * @param {{id:string, className:string, nodeName:string}} prop specific properties
     * 
     * @returns return the first matched element if exist, else return null.
     */
    function hasAncestor(ele, prop) {
        if (!ele || !prop) return;
        var id = prop.id,
            className = prop.className,
            nodeName = prop.nodeName;
        if (!(id || className || nodeName)) return;

        var parent,
            tempTarget;

        if (id) {
            parent = ele.parentElement;
            if (parent == null) return;
            while (parent != document.documentElement && parent.nodeName.toLocaleLowerCase() != 'body') {
                if (parent.id == id) {
                    tempTarget = parent;
                    break;
                } else {
                    parent = parent.parentElement;
                }
            }
        }
        if (className) {
            if (tempTarget) {
                if (!tempTarget.classList.contains(className)) {
                    tempTarget = null;
                }
            } else {
                parent = ele.parentElement;
                while (null != parent && parent != document.documentElement && parent.nodeName.toLocaleLowerCase() != 'body') {
                    if (parent.classList.contains(className)) {
                        tempTarget = parent;
                        break;
                    } else {
                        parent = parent.parentElement;
                    }
                }
            }
        }
        if (nodeName) {
            nodeName = nodeName.toLocaleLowerCase();
            if (tempTarget) {
                if (tempTarget.nodeName.toLocaleLowerCase() != nodeName) {
                    tempTarget = null;
                }
            } else {
                parent = ele.parentElement;
                while (parent.nodeName.toLocaleLowerCase() != 'body') {
                    if (parent.nodeName.toLocaleLowerCase() == nodeName) {
                        tempTarget = parent;
                        break;
                    } else {
                        parent = parent.parentElement;
                    }
                }
            }
        }
        return tempTarget;
    }

    // Event type distinction.
    var fingerdown, fingermove, fingerup, floatover, floatout;
    if (isMobile()) {
        fingerdown = 'touchstart';
        fingermove = 'touchmove';
        fingerup = 'touchend';
        floatover = 'touchstart';
        floatout = 'touchend';
    } else {
        fingerdown = 'mousedown';
        fingermove = 'mousemove';
        fingerup = 'mouseup';
        floatover = 'mouseover';
        floatout = 'mouseout';
    }

    var initYukoComponent = {
        // Radio
        'initRadio': function initRadio() {
            var radios = document.querySelectorAll('.yuko-radio');

            document.body.addEventListener(fingerdown, function (evt) {
                var _target = event.target;
                if (hasAncestor(_target, { className: 'yuko-radio' })) {
                    // _this: yuko-radio
                    var _this, _last, _input;
                    _this = _target.parentElement;
                    _last = _this.lastElementChild;
                    _input = _this.firstElementChild;
                    // Set checked
                    if (!_this.classList.contains('is-checked')) {
                        var inputName = _this.firstElementChild.name;
                        for (var rdi = 0; rdi < radios.length; rdi++) {
                            var _thisInput = radios[rdi].firstElementChild;
                            if (_thisInput.name == inputName) {
                                _thisInput.removeAttribute('checked');
                                _thisInput.parentElement.className = _thisInput.parentElement.className.replace(/\s*is-checked/ig, '');
                            }
                        }
                        _this.className += ' is-checked';
                        _input.setAttribute('checked', '');
                    }
                }
            });
        },
        // Select
        'initSelectBox': function initSelectBox() {
            var closeAllSelect = function (except) {
                var x,
                    y,
                    i;
                x = document.querySelectorAll(".yuko-select_items");
                y = document.querySelectorAll(".yuko-select_selected");
                except = typeof (except) == 'number' ? x[except] : except;

                for (i = 0; i < x.length; i++) {
                    if (x[i] != except) {
                        x[i].classList.add("yuko-select_hide");
                        y[i].classList.remove("yuko-select_arrow-active");
                    }
                }
            };

            var toggleSelect = function (selected) {
                var items_list = selected.nextElementSibling;
                closeAllSelect(items_list);
                if (items_list.classList.contains('yuko-select_hide')) {
                    selected.classList.add('yuko-select_arrow-active');
                    items_list.classList.remove('yuko-select_hide')
                } else {
                    selected.classList.remove('yuko-select_arrow-active');
                    items_list.classList.add('yuko-select_hide');
                }
            };

            var fingerdownPointY, fingerupPointY;
            var hideKeyboard = function() {
                document.activeElement.blur();
                $("input").blur();
            };
            
            document.addEventListener(fingerdown, function (evt) {
                // _this: yuko-selectbox
                var _this,
                    _selected,
                    _items,
                    _target = evt.target;
                fingerdownPointY = evt.pageY || evt.changedTouches[0].pageY;

                if (_target != document.documentElement) {
                    if (_target.classList.contains('yuko-select_selected')) {
                        _selected = _target;
                        _this = _selected.parentElement;
                    } else if (_target.parentElement.classList.contains('yuko-select_items')) {
                        _items = _target.parentElement;
                        _selected = _items.previousElementSibling;
                        _this = _selected.parentElement;
                    }
                    hideKeyboard();
                }

            });

            document.addEventListener(fingerup, function (evt) {
                var _this,
                    _selected,
                    _items,
                    _target = evt.target;
                fingerupPointY = evt.pageY || evt.changedTouches[0].pageY;
                if (_target != document.documentElement) {
                    if (_target.classList.contains('yuko-select_selected')) {
                        _selected = _target;
                        _this = _selected.parentElement;
                    } else if (_target.parentElement.classList.contains('yuko-select_items')) {
                        _items = _target.parentElement;
                        _selected = _items.previousElementSibling;
                        _this = _selected.parentElement;
                    }
                }
                if (_this == undefined) {
                    // press down out of yuko-selectbox
                    closeAllSelect();
                }

                if (_items != undefined && fingerupPointY - fingerdownPointY === 0) {
                    var selected_val = _target.innerHTML.trim();
                    // Set selected value
                    if (_selected.nodeName.toLocaleLowerCase() === 'input') {
                        _selected.value = selected_val;
                    } else {
                        _selected.innerHTML = selected_val;
                    }
                    closeAllSelect();
                }

                // Press down selected box
                if (_items == undefined && _this) {
                    // Add ripple effect
                    // _selected.addEventListener(fingerdown, Yuko.effect.rippleEffect);
                    toggleSelect(_selected);
                }
            });
        }
    };

    for (var key in initYukoComponent) {
        if (initYukoComponent.hasOwnProperty(key)) {
            var func = initYukoComponent[key];
            func();
        }
    }
})();