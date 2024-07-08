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

    try {
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();

        console.log("Email após ajuste:", trimmedEmail);
        console.log("Senha após ajuste:", trimmedPassword);

        // Verifica se o usuário já existe
        const { data: existingUser, error: existingUserError } = await supabase
            .from('user')
            .select('id')
            .eq('email', trimmedEmail)
            .single();

        if (existingUserError && existingUserError.code !== 'PGRST116') {
            console.error("Erro ao verificar usuário existente:", existingUserError);
            return res.status(400).json({ message: 'Erro ao verificar usuário existente.' });
        }

        if (existingUser) {
            // Se o usuário já existe, retorna uma mensagem de erro
            return res.status(400).json({ message: 'Usuário com este e-mail já existe.' });
        }

        // Criação do novo usuário
        const { data, error } = await supabase
            .from('user')
            .insert({ email: trimmedEmail, senha: trimmedPassword });

        if (error) {
            console.error("Erro ao criar usuário no Supabase:", error);
            return res.status(400).json({ message: 'Erro ao criar usuário.' });
        }

        return res.status(200).json({ 
            message: 'Conta criada com sucesso!',
            redirectUrl: '/'
        });

    } catch (error) {
        console.error("Erro ao processar a requisição:", error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
