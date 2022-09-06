import { rest } from 'msw';

export const handlers = [
    rest.get("http://localhost:3000/scoops", (res, req, ctx) => {
        return res(
            ctx.json([
                { name: 'Choclate', imagePath: './images/choclate.png'},
                { name: 'Vanilla', imagePath: './images/vanilla.png'}
            ])
        )
    })
]