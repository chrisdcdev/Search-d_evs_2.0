import { getUserRepositories } from "../services/api/repos";

export const GetByUserRepositories = (name:string, currentPage: number) => {
    return getUserRepositories.get(`${name}/repos?per_page=7&page${currentPage}`).then((Response) => {
        const response = Response.data;
        // const data = response.sort((
        //     initialCountStar : { stargazers_count: number }, 
        //     compareCountStar : { stargazers_count: number }) => {
        //     return compareCountStar.stargazers_count - initialCountStar.stargazers_count;
        //   });
          
        return response;
    })
}