class Sped {
    static init(sped) {
        return sped.split("\n");
    }
    static dividir(sped) {
        return sped.split("|");
    }

    static juntar(sped) {
        return sped.join("|");
    }

    static alterarPISCONFINS(spedDividido, novoPIS) {
        spedDividido[25] = novoPIS;
        spedDividido[31] = novoPIS;
        return spedDividido;
    }

    static verificarCFOP(CFOPs, cfop) {
        const valid = CFOPs.filter((c) => (c == cfop));
        return valid.length > 0 ? true : false;
    }

    static verificaCampo(linha, campo) {
        return linha.includes(campo);
    }
}

function alterarIcms(sped, filtro, cfop = 0, novoValor) {
    return Sped.init(sped).map((i) => {
        if (Sped.verificaCampo(i, filtro)) {
            let spedDividido = Sped.dividir(i);
            if (Sped.verificarCFOP(cfop, spedDividido[11]) || cfop == 0) {
                spedDividido = Sped.alterarPISCONFINS(spedDividido, novoValor);

            }
            i = Sped.juntar(spedDividido);
        }
        return i;
    }).join("\n");
}