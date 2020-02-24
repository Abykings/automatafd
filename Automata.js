/*
Enrique Abdiel Reyes Rodriguez
2019630112
2CV3
*/
class Automata {
    constructor(file) {
        this.afd = file.afd;
        this.estadoInicial = this.afd.q0;
        this.estadosFinales = this.afd.F;
        this.simbolos = this.afd.s;
        this.estados = this.procesaEstados();
    }
    procesaEstados() {
        var aux = {};
        var estados = [];
        this.afd.Q.forEach(q => {
            aux.q = q;
            aux.direcciones = [];
            this.afd.s.forEach(s => {
                this.afd.d.forEach(e => {
                    if (e[0] == q && e[1] == s) {
                        aux.direcciones.push(
                            {
                                simbolo: s,
                                irA: e[2]
                            }
                        );
                    }
                });
            });
            estados.push(aux);
            aux = {}
        });

        return estados;
    }
    verTablaTransicion() {
        console.log("Σ:   " + this.afd.s);
        var aux = {};
        var estados = [];
        this.afd.Q.forEach(q => {
            process.stdout.write(`${q}||`);
            aux.q = q;
            aux.direcciones = [];
            this.afd.s.forEach(s => {
                this.afd.d.forEach(e => {
                    if (e[0] == q && e[1] == s) {
                        aux.direcciones.push(
                            {
                                simbolo: s,
                                irA: e[2]
                            }
                        );
                        process.stdout.write(`${e[2]}|`);
                    }
                });
            });
            estados.push(aux);
            aux = {}
            process.stdout.write("\n");
        });
        return estados;
    }
    evalua(w) {
        var estadoActual = this.estadoInicial;
        var estadosFinales = this.estadosFinales;
        for (var i = 0; i < w.length; i++) {
            for (var j = 0; j < this.estados.length; j++) {
                var estado = this.estados[j];
                if (estado.q == estadoActual) {
                    for (var k = 0; k < estado.direcciones.length; k++) {
                        var e = estado.direcciones[k];
                        if (e.simbolo == w[i]) {
                            estadoActual = e.irA;
                            break;
                        }
                    }
                    break;
                }
            }

        }
        if (estadosFinales.includes(estadoActual)) {
            console.log("Cadena valida")
        } else {
            console.log("Cadena invalida")
        }
        return 0;
    }
}


module.exports = Automata;