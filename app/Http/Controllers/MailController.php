<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\EmailCalina;

class MailController extends Controller
{
    public $show;

    function index() {

        $show = false;
        return view('welcome',compact('show'));

    }

    public function sendEmail(){
        Mail::to('eder.ribeiro@usp.br')->send(new EmailCalina($_POST['name'], $_POST['email'], $_POST['msg'] ));
        //Mail::to('leandro@calina.ag')->send(new EmailCalina($_POST['name'], $_POST['email'], $_POST['msg'] ));
        $show = true;
        return view('welcome',compact('show'));
    }

}
