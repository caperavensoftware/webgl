export class App {
    router = null;

    configureRouter(config, router) {
        config.title = 'Pragma Products';
        config.map([
            {route: ['', 'welcome'], name: 'welcome',      moduleId: 'views/welcome/welcome',      nav: true, title: 'Welcome'},
            {route: ['test1'], name: 'test1',  moduleId: 'views/test1/test1', nav: true, title: 'Test 1'},
        ]);

        this.router = router;
    }
}