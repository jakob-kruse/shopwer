export class ElementScope {
    private subScopes: ElementScope[] = [];

    constructor(private elementId: symbol, parent?: ElementScope) {}

    subScope(elementId: symbol): ElementScope {
        const subScope = new ElementScope(elementId, this);

        this.subScopes.push(subScope);

        return subScope;
    }

    get id(): symbol {
        return this.elementId;
    }
}

const registeredScopes: ElementScope[] = [];

export function createScope(scopeId: symbol): ElementScope {
    const scope = new ElementScope(scopeId);

    registeredScopes.push(scope);

    return scope;
}
