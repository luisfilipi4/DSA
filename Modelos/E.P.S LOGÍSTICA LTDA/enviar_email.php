<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coleta os dados do formulário
    $nome = htmlspecialchars($_POST['nome']);
    $email = htmlspecialchars($_POST['email']);
    $contato = htmlspecialchars($_POST['contato']);
    $freight_type = htmlspecialchars($_POST['freight_type']);
    $cidade_partida = htmlspecialchars($_POST['cidade_partida']);
    $incoterms = htmlspecialchars($_POST['incoterms']);
    $peso_carga = htmlspecialchars($_POST['peso_carga']);
    $altura = htmlspecialchars($_POST['altura']);
    $largura = htmlspecialchars($_POST['largura']);
    $comprimento = htmlspecialchars($_POST['comprimento']);
    $extra_service = htmlspecialchars($_POST['extra_service']);
    
    // Define o e-mail do destinatário
    $to = "contato@epscargaslogistica.com.br";
    
    // Assunto do e-mail
    $subject = "Solicitação de Orçamento de " . $nome;
    
    // Corpo do e-mail
    $message = "
    Nome: $nome\n
    E-mail: $email\n
    Contato: $contato\n
    Tipo de Serviço: $freight_type\n
    Cidade de Partida: $cidade_partida\n
    Incoterms: $incoterms\n
    Peso da Carga: $peso_carga\n
    Altura: $altura cm\n
    Largura: $largura cm\n
    Comprimento: $comprimento cm\n
    Serviços Extras: $extra_service
    ";
    
    // Cabeçalhos do e-mail
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    
    // Envia o e-mail
    if (mail($to, $subject, $message, $headers)) {
        echo "Orçamento enviado com sucesso!";
    } else {
        echo "Erro ao enviar o orçamento. Tente novamente.";
    }
}
?>