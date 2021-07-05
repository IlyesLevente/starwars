import { People } from './people';

export interface SearchPeople {
    count: number;
    next: string | null;
    previous: string | null;
    results: People[];
}