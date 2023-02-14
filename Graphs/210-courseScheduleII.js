/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let ans = [];
    let ansMap = new Map();
    let visitedMap = new Map();

    if(prerequisites.length == 0){
        for(let i = 0; i < numCourses; i++){
            ans.push(i);
        }
        return ans;
    }

    let coursesMap = new Map();
    for(let i = 0; i < prerequisites.length; i++){
        let val = coursesMap.get(prerequisites[i][0]);

        if(val === undefined){
            coursesMap.set(prerequisites[i][0], [prerequisites[i][1]])
        } else {
            coursesMap.set(prerequisites[i][0], [...val, prerequisites[i][1]]);
        }
    }

    for(course of coursesMap){
        // the [0] course needs all courses in [1] before
        if(dfs(course[0]) === false)return [];
    }
    
    if(ans.length == numCourses)return ans;
    
    for(let i = 0; i < numCourses; i++){
        if(ansMap.get(i) === undefined){
            ans.push(i);
        }
    }
    return ans;



    function dfs(course){
        if(visitedMap.get(course) !== undefined){
            return false;
        }
        visitedMap.set(course, true);

        let courseInMap = coursesMap.get(course);
        if(courseInMap === undefined){
            visitedMap.delete(course);
            if(ansMap.get(course) === undefined){
                ans.push(course);
                ansMap.set(course, true);
            }
        } else {
            for(let i = 0; i < courseInMap.length; i++){
                if(dfs(courseInMap[i]) === false)return false;
            }
            visitedMap.delete(course);

            if(ansMap.get(course) === undefined){
                coursesMap.set(course, undefined);
                ans.push(course);
                ansMap.set(course, true);
            }
        }
    }

};