"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var HomeComponent = (function () {
    function HomeComponent(fb) {
        this.fb = fb;
        this.states = ['CA', 'MD', 'OH', 'VA'];
        this.city = ['DHK', 'CHI', 'KHU'];
        this.createForm();
    }
    HomeComponent.prototype.createForm = function () {
        this.signupFrom = this.fb.group({
            name: ['', forms_1.Validators.required],
            email: '',
            city: '',
            state: '',
            zip: '',
            gn: '',
            term_condition: ''
        });
    };
    HomeComponent.prototype.ngOnChanges = function () {
        this.signupFrom.reset({});
    };
    HomeComponent.prototype.onSubmit = function () {
        var formModel = this.signupFrom.value;
        console.log(formModel);
        console.log(formModel.name);
        this.ngOnChanges();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: 'app/components/home/home.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.js.map