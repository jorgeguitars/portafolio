<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactMail extends Mailable
{
    use Queueable, SerializesModels;

    public $name;
    public $email;
    public $body;

    /**
     * Create a new message instance.
     */
    public function __construct(string $name, string $email, string $body)
    {
        $this->name = $name;
        $this->email = $email;
        $this->body = $body;
    }

    /**
     * Build the message.
     */
    public function build()
    {
        return $this->subject('Mail from Portafolio')
                    ->replyTo($this->email)
                    ->view('emails.contact')
                    ->with([
                        'name' => $this->name,
                        'email' => $this->email,
                        'body' => $this->body,
                    ]);
    }
}
