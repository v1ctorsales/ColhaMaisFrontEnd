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

        const { data, error } = await supabase
            .from('user')
            .select('*')
            .eq('email', trimmedEmail)
            .eq('senha', trimmedPassword);

        console.log("Resposta completa do Supabase:", { data, error });
        
        if (error) {
            console.error("Erro retornado do Supabase:", error);
            throw error;
        }

        if (data.length > 0) {
            return res.status(200).json({ message: 'Login bem-sucedido!' });
        } else {
            return res.status(401).json({ message: 'Credenciais inválidas.' });
        }
    } catch (error) {
        console.error("Erro ao processar a requisição:", error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
