<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plantilla de Correo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            color: #333;
            background-color: #f8f9fa;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: auto;
            background-color: #ffffff;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .logo {
            text-align: center;
            margin-bottom: 20px;
        }
        .logo img {
            max-width: 150px;
            height: auto;
        }
        h1 {
            color: #007bff;
            font-size: 24px;
            margin-bottom: 20px;
        }
        p {
            font-size: 16px;
            line-height: 1.5;
            margin-bottom: 20px;
        }
        .footer {
            text-align: center;
            font-size: 14px;
            color: #6c757d;
            margin-top: 20px;
        }
        .footer a {
            color: #007bff;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">
            <img src="{{ asset('images/logo.png') }}" alt="Logo de la Empresa">

        </div>
        <h1>Contacto de {{ $name }}</h1>
        <p>{{ $body }}</p>
        <p>Enviado desde el correo: <strong>{{ $email }}</strong></p>
        <div class="footer">
            <p>Gracias por tu mensaje. Si tienes alguna pregunta, no dudes en contactarnos.</p>
            <p><a href="mailto:{{ $email }}">Responder al correo</a></p>
        </div>
    </div>
</body>
</html>
