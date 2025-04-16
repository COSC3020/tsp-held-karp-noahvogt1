function tsp_hk(distance_matrix) {
    let minDist = Infinity;
    let dist = 0;
    for (let i = 0; i < distance_matrix.length; i++) {
        dist = rec_hk(distance_matrix.map(row => [...row]), i);
        if (dist < minDist) minDist = dist;
    }
    return minDist;
}

function rec_hk(distance_matrix, start) {
    let minDist = Infinity;
    let minNode = 0;
    for (let i = 0; i < distance_matrix.length; i++) {
        distance_matrix[i][start] = 0;
        if (i != start && distance_matrix[start][i] != 0) {
            if (distance_matrix[start][i] < minDist) {
                minDist = distance_matrix[start][i];
                minNode = i;
            }
        }
    }
    if (minDist === Infinity) return 0;
    else return minDist + rec_hk(distance_matrix, minNode);
}
