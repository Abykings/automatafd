//no contenga 3b's consecutivas
var afd = {
    Q:['q0','q1','q2','q3'],
    s:['a','b'],
    q0:'q0',
    F:['q0','q1','q2'],
    d:[ //Q,   s,  d(q,s)
        ['q0','a','q0'],
        ['q0','b','q1'],
        ['q1','a','q0'],
        ['q1','b','q2'],
        ['q2','a','q0'],
        ['q2','b','q3'],
        ['q3','a','q3'],
        ['q3','b','q3']
    ]
}
exports.afd = afd;