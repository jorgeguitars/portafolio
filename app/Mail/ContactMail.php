<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactMail extends Mailable
{
    use Queueable, SerializesModels;

    public $name;
    public $body;
    public $email;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $body, $email)
    {
        $this->name = $name;
        $this->body = $body;
        $this->email = $email;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.contact')
                    ->attach(public_path('images/logo.png'), [
                        'as' => 'logo.png',
                        'mime' => 'image/png',
                    ])
                    ->with([
                        'name' => $this->name,
                        'body' => $this->body,
                        'email' => $this->email,
                    ]);
    }
}
