import Service from './Service';

class ComponentsService extends Service {

    constructor() {
        super("Websites");
        this.unique_keys = ["title", "path"];
        this.required_keys = ["path"];
    }

}

export default ComponentsService;