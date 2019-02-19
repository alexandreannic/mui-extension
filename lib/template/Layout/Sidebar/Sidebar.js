"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var core_1 = require("@material-ui/core");
var classnames_1 = require("classnames");
var Layout_1 = require("../Layout");
var Header_1 = require("../Header/Header");
var LayoutContext_1 = require("../LayoutContext");
var makeStyles_1 = require("@material-ui/styles/makeStyles");
var useStyles = makeStyles_1.default(function (t) { return ({
    root: {
        width: Layout_1.sidebarWith,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 0,
    },
}); });
exports.Sidebar = function (_a) {
    var children = _a.children, className = _a.className;
    // @ts-ignore
    var classes = useStyles();
    var _b = LayoutContext_1.useLayoutContext(), isMobileWidth = _b.isMobileWidth, isMobileSidebarOpened = _b.isMobileSidebarOpened, openMobileSidebar = _b.openMobileSidebar, closeMobileSidebar = _b.closeMobileSidebar;
    var opened = !isMobileWidth || isMobileSidebarOpened;
    return (React.createElement(core_1.SwipeableDrawer, { open: opened, onOpen: openMobileSidebar, onClose: closeMobileSidebar, variant: isMobileWidth ? 'temporary' : 'permanent' },
        React.createElement(React.Fragment, null,
            React.createElement("div", { className: classnames_1.default(classes.root, className) },
                React.createElement(Header_1.Header, null),
                children))));
};
//# sourceMappingURL=Sidebar.js.map