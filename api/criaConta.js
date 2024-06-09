const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Método não permitido. Use POST.' });
    }

    console.log("Requisição recebida:", req.body);

    const { email, password } = req.body;

    console.log("Email recebido:", email);
    console.log("Senha recebida:", password);

    try {
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();

        console.log("Email após ajuste:", trimmedEmail);
        console.log("Senha após ajuste:", trimmedPassword);

        // Aqui você deve inserir o novo usuário no banco de dados Supabase
        const { data, error } = await supabase
            .from('user') // Substitua 'user' pelo nome da sua tabela de usuários
            .insert({ email: trimmedEmail, senha: trimmedPassword });

            return res.status(200).json({ 
                message: 'Conta criada com sucesso!',
                redirectUrl: '/'
            });
            
        
        if (error) {
            console.error("Erro retornado do Supabase:", error);
            throw error;
        }

        // Se a inserção for bem-sucedida, retornar uma mensagem de sucesso
        return res.status(200).json({ message: 'Conta criada com sucesso!' });

    } catch (error) {
        console.error("Erro ao processar a requisição:", error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
