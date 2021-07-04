import { People } from "./people";
import { SearchPeople } from "./search-people";

export class SharedMockData {
    static getPeopleDatasMock(): People {
        const people = {} as People;

        people.name = "Luke Skywalker";
        people.birth_year = "19 BBY";
        people.eye_color = "Blue";
        people.films = [
            "https://swapi.dev/api/films/1/"
        ];
        people.gender = "Male";
        people.url = "https://swapi.dev/api/people/1/";

        return people;
    }

    static getSearchPeopleDatasMock(): SearchPeople {
        const searchPeople = {} as SearchPeople;

        searchPeople.count = 82; 
        searchPeople.next = "https://swapi.dev/api/people/?page=2";
        searchPeople.previous = null;
        searchPeople.results = [];
        searchPeople.results.push(this.getPeopleDatasMock());

        return searchPeople;
    }
}