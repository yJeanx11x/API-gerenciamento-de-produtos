const z=require('zod')
const produtovalidacao = z.object({
    nome: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres'),
    descricao: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres'),
    preco: z.number().multipleOf(0.01),
    estoque: z.number().int("O valor deve ser um número inteiro").positive(),
})

module.exports=produtovalidacao