export default function functionOrder (state, order){
    switch (order) {
        case 'A-Z':
            let auxStateAZ = state;

            auxStateAZ.sort((a, b)=> {
                const auxA= a.name.toLowerCase()
                const auxB= b.name.toLowerCase();
                if (auxA<auxB) return -1;
                if (auxA>auxB) return 1;
                return 0;
            })
            return auxStateAZ

        case 'Z-A':
            let auxAZ = state;
            auxAZ.sort((a, b)=> {
                const auxA= a.name.toLowerCase()
                const auxB= b.name.toLowerCase();
                if (auxA<auxB) return -1;
                if (auxA>auxB) return 1;
                return 0;
            })
            let auxStateZA = auxAZ.reverse();

            return auxStateZA;

        case 'Descending':
            let auxStatePopulationDes=state;

            auxStatePopulationDes.sort((a, b)=> {
                if (a.population<b.population) return -1;
                if (a.population>b.population) return 1;
                return 0;
            })

            return auxStatePopulationDes

        case 'Ascending':
            let auxPopulationAs=state;

            auxPopulationAs.sort((a, b)=> {
                if (a.population<b.population) return -1;
                if (a.population>b.population) return 1;
                return 0;
            })
            let auxStatePopulationAs = auxPopulationAs.reverse();
            return auxStatePopulationAs

        default:
            return state;
    }
}