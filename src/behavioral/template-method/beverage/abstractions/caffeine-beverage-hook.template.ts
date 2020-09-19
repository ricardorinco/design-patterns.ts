export abstract class CaffeineBeverageHook {

    public prepareRecipe() {
        this.boilWater();
        this.brew();
        this.pourInCup();

        if (this.customerWantsCondiments()) {
            this.addCondiments();
        }
    }

    private boilWater(): void {
        console.log('Boiling water');
    }

    private pourInCup(): void {
        console.log('Pouring into cup');
    }

    protected customerWantsCondiments(): boolean {
        return true;
    }

    protected abstract brew(): void;
  
    protected abstract addCondiments(): void;

}
