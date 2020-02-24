//cadena que inicie en cero
var afd = {
    Q:['a','b','c'],
    s:['1','0'],
    q0:'a',
    F:['b'],
    d:[ //Q,   s,  d(q,s)
        ['a','0','b'],
        ['a','1','c'],
        ['b','0','b'],
        ['b','1','b'],
        ['c','0','c'],
        ['c','1','c'],
    ]
}
exports.afd = afd;