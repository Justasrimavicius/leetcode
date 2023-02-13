/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    if(prerequisites.length == 0)return true;

    let coursesMap = new Map();
    let visitedCourses = new Map();

    for(let i = 0; i < prerequisites.length; i++){
        let course = coursesMap.get(prerequisites[i][0]);

        if(course === undefined){
            coursesMap.set(prerequisites[i][0], [prerequisites[i][1]]);
        } else {
            coursesMap.set(prerequisites[i][0], [...course, prerequisites[i][1]])
        }
    }
    
    function dfs(node){
        if(visitedCourses.get(node)){
            return false;
        }
        let prereqs = coursesMap.get(node);
        if(prereqs !== undefined){
            if (prereqs.length === 0){
                return true;
            }
        
            visitedCourses.set(node, true);
            for(let val of prereqs){
                if(!dfs(val)){
                    return false
                }
            }
            visitedCourses.delete(node);
            
            coursesMap.set(node, []);
        }
        return true;

    }

    for(let i = 0; i < numCourses; i++){
        if(!dfs(i))return false;
    }
    return true;

}