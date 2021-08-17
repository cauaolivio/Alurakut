import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if (request.method === 'POST') {
        const TOKEN = '9793b0528f2abde8886cf4f29d3f33';

        const client = new SiteClient(TOKEN);

        const registroCriado = await client.items.create({
            itemType: "1076444",
            ...request.body,
            // title: "Comunidade de teste",
            // imageUrl: "https://github.com/cauaolivio.png",
            // creatorSlug: "cauaolivio",
        });

        console.log(registroCriado);

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}