<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function index()
    {
        $data = [
            'nama' => 'Adhimas Dwi Putra',
            'alamat' => 'Kp.Cibuluh Rt 04/RW 04,Bogor',
            'email' => '232310004@student.ibik.co.id',
            'telepon' => '+62 821-2484-6651',
            'linkedin' => 'https://www.linkedin.com/in/Adhimas Dwi Putra',
            'github' => 'https://github.com/AdhimasDwi',
            'tentang_saya' => 'Seorang pengembang web yang bersemangat dengan pengalaman dalam Laravel dan teknologi front-end. Tertarik pada pengembangan aplikasi yang efisien dan user-friendly.',
            'pendidikan' => [
                [
                    'institusi' => 'IBI Kesatuan Bogor',
                    'jurusan' => 'Teknologi informasi',
                    'tahun' => '2023 - Sekarang'
                ],
                 [
                    'institusi' => 'SMK Negeri 2 Bogor',
                    'jurusan' => 'Tenik Pemesinan',
                    'tahun' => '2020 - 2023'
                ],
                 [
                    'institusi' => 'SMP Negeri 5 Bogor',
                    'jurusan'   => '',
                    'tahun' => '2017 - 2020'
                ],
                 [
                    'institusi' => 'SD Negeri Cibuluh 6 Bogor',
                    'jurusan'   => '',
                    'tahun' => '2011 - 2017'
                ],
            ],
            
            'skill' => [
                'PHP', 'Laravel', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Git', 'RESTful API'
            ]
        ];

        return view('profile.index', compact('data'));
    }
}