function tsp_hk(distance_matrix) {
    let minDist = Infinity;

    for (let start = 0; start < distance_matrix.length; start++) {
        let visited = new Set([start]);
        let dist = rec_hk(distance_matrix, start, visited, start);
        if (dist < minDist) minDist = dist;
    }
    if (minDist == Infinity) return 0;
    return minDist;
}

function rec_hk(matrix, current, visited, memo = {}, start) {
    let key = current + visited;
    if (memo[key] != undefined) return memo[key];

    if (visited.size == matrix.length) {
        return 0;
    }

    let minDist = Infinity;

    for (let i = 0; i < matrix.length; i++) {
        if (!visited.has(i) && matrix[current][i] != 0) {
            visited.add(i);
            let dist = matrix[current][i] + rec_hk(matrix, i, visited, memo, start);
            if (dist < minDist) minDist = dist;
            visited.delete(i);
        }
    }

    memo[key] = minDist;
    return minDist;
}
