module.exports = async (req, res) => {
    console.log("a")
    try {
        // Aqui você pode realizar qualquer lógica necessária, como acessar um banco de dados, processar dados, etc.
        const data = "1234";

        // Retornar uma resposta com o status 200 e os dados em formato JSON
        res.status(200).json(data);
    } catch (error) {
        // Se ocorrer algum erro durante o processamento, você pode retornar uma resposta de erro
        console.error("Erro ao processar a requisição:", error);
        res.status(500).json({ message: "Erro interno do servidor" });
    }
};
