const clientes = [
	{
		nome: "Rafael",
		idade: 32,
		cpf: "11144488852",
		email: "rafael@email.com",
		fones: ["5553888888888", 
		"5553777777777"],
		dependentes: [
			{
				nome: "Sarah",
				parentesco: "filha",
				dataNasc: "08/08/2008"
			},
			{
				nome: "Bárbara",
				parentesco: "esposa",
				dataNasc: "28/08/1991"
			}]
		},
		{
			nome: "Ana Luisa",
			idade: 62,
			cpf: "11144488852",
			email: "analuz@email.com",
			fones: ["5553888888888", 
			"5553777777788"],
			dependentes: [
				{
					nome: "Tulee",
					parentesco: "Pet",
					dataNasc: "08/09/2008"
				}
			]
		}
	]

	const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];
	console.log(listaDependentes)
	console.table(listaDependentes)