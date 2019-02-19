"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var lodash_debounce_1 = require("lodash.debounce");
var LayoutContext = react_1.createContext({});
exports.LayoutProvider = function (_a) {
    var title = _a.title, _b = _a.mobileBreakpoint, mobileBreakpoint = _b === void 0 ? 700 : _b, children = _a.children;
    var _c = react_1.useState(false), isMobileSidebarOpened = _c[0], setIsMobileSidebarOpened = _c[1];
    var _d = react_1.useState(getWidth()), mobileWidth = _d[0], setMobileWidth = _d[1];
    var openMobileSidebar = function () { return setIsMobileSidebarOpened(true); };
    var closeMobileSidebar = function () { return setIsMobileSidebarOpened(false); };
    var toggleMobileSidebar = function () { return setIsMobileSidebarOpened(!isMobileSidebarOpened); };
    react_1.useEffect(function () {
        window.addEventListener('resize', lodash_debounce_1.default(function () { return setMobileWidth(getWidth()); }, 600));
    }, []);
    return (React.createElement(LayoutContext.Provider, { value: {
            isMobileSidebarOpened: isMobileSidebarOpened,
            openMobileSidebar: openMobileSidebar,
            closeMobileSidebar: closeMobileSidebar,
            toggleMobileSidebar: toggleMobileSidebar,
            title: title,
            isMobileWidth: mobileWidth < mobileBreakpoint,
        } }, children));
};
function getWidth() {
    return window.innerWidth;
}
exports.useLayoutContext = function () {
    return react_1.useContext(LayoutContext);
};
//# sourceMappingURL=LayoutContext.js.map