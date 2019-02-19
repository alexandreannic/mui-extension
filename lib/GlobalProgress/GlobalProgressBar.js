"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var GlobalProgressContext_1 = require("./GlobalProgressContext");
var classnames_1 = require("classnames");
var styles_1 = require("@material-ui/styles");
var progressbarColor = function (t) { return t.palette.primary.main; };
var useStyles = styles_1.makeStyles(function (t) { return ({
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        visibility: 'visible',
        opacity: 1,
        transition: 'all 400ms',
        zIndex: 9999,
    },
    progress: {
        background: progressbarColor(t),
        boxShadow: "0 0 10px " + progressbarColor(t) + ", 0 0 5px " + progressbarColor(t),
        height: 2,
        transition: t.transitions.create('all', { duration: GlobalProgressContext_1.progressbarAnimationDuration }),
    },
    progressHide: {
        height: '0px !important',
    },
}); });
var INITIAL_PERCENT = 10;
var GlobalProgressBar = function (_a) {
    var currentStep = _a.currentStep, steps = _a.steps, started = _a.started, className = _a.className, style = _a.style, styleProgress = _a.styleProgress;
    // @ts-ignore
    var classes = useStyles();
    var getPercent = function () { return INITIAL_PERCENT + (100 - INITIAL_PERCENT) / steps * currentStep; };
    return (React.createElement("div", { className: classes.root, style: style },
        React.createElement("div", { className: classnames_1.default(classes.progress, !started && classes.progressHide), style: __assign({}, styleProgress, { width: getPercent() + '%' }) })));
};
exports.default = GlobalProgressContext_1.withGlobalProgress(GlobalProgressBar);
//# sourceMappingURL=GlobalProgressBar.js.map