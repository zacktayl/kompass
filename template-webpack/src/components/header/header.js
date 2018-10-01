import appHeader from './appHeader.html';

const app = appHeader({
    target: document.querySelector('my-header'),
    data: function () {
        return {headerText: 'my first header'};
    }
});

