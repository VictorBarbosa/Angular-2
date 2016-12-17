import { Component } from '@angular/core';
import { Person } from '../../app/model/person';
 
import { UniquePipe } from '../../app/services/unique'
import { FilterPipe } from '../../app/services/filter'

@Component(
    {
        selector: 'my-form',
        templateUrl: "../../app/form/form.html",
        providers: [UniquePipe,FilterPipe]
    })
export class FormComponent {
    People: Array<Person> = new Array<Person>()
    person: Person = new Person();
    constructor() {
        this.People.push({ age: 29, country: "Brazil", name: "Victor Barbosa" })
        this.People.push({ age: 24, country: "Brazil", name: "Neymar" })
        this.People.push({ age: 44, country: "Canada", name: "Justin Trudeau" })
        this.People.push({ age: 69, country: "USA", name: "Stephen King" })
     

    }
    public Add(person: Person): void {
        debugger
        this.People.push(person);
        this.person = new Person();
    }
}