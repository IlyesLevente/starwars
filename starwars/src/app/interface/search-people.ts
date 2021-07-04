import { People } from './people';

export interface SearchPeople {
    count: number;
    next: string;
    previous: string
    results: People[];
}