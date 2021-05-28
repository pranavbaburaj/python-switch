
export interface Package {
    name?:string,
    id?:number,
    url?:string,
    vcs?:string,
    dependencies?:Array<string>
}

export const createModule = (data:any):Package => {
    const module:Package = {
        name : data.name,
        url : data.url,
        vcs : data.vcs,
        dependencies : data.dependencies
    }
    return module
}

class CreateModule {
    private module:Package;

    constructor(module:Package) {
        this.module = module;
        console.log(this.module)
    }
}