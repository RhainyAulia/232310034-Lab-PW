<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Diri - {{ $data['nama'] }}</title>
   
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        
        body {
            font-family: 'Inter', sans-serif; 
            background-color: #f4f7f6; 
            color: #333; 
        }
        .container {
            max-width: 960px; 
        }
        .section-title {
            border-bottom: 2px solid #3182ce; 
            padding-bottom: 0.5rem;
            margin-bottom: 1.5rem;
            font-weight: 700; 
            color: #2b6cb0; 
        }
        .card {
            background-color: #ffffff; 
            border-radius: 0.75rem; 
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
        }
    </style>
</head>
<body class="p-8">
    <div class="container mx-auto mt-8 p-6 card">
       
        <header class="text-center mb-8">
            <h1 class="text-5xl font-bold text-gray-800">{{ $data['nama'] }}</h1>
            <p class="text-xl text-gray-600 mt-2">{{ $data['tentang_saya'] }}</p>
            <div class="flex justify-center space-x-4 mt-4 text-lg">
                <a href="mailto:{{ $data['email'] }}" class="text-blue-600 hover:underline">{{ $data['email'] }}</a>
                <span>|</span>
                <span>{{ $data['telepon'] }}</span>
                <span>|</span>
                <a href="{{ $data['linkedin'] }}" target="_blank" class="text-blue-600 hover:underline">LinkedIn</a>
                <span>|</span>
                <a href="{{ $data['github'] }}" target="_blank" class="text-blue-600 hover:underline">GitHub</a>
            </div>
            <p class="text-lg text-gray-600 mt-2">{{ $data['alamat'] }}</p>
        </header>

        <hr class="my-8 border-gray-300">

      
        <section class="mb-8">
            <h2 class="text-3xl section-title">Pendidikan</h2>
            @foreach ($data['pendidikan'] as $edu)
                <div class="mb-4">
                    <h3 class="text-2xl font-semibold text-gray-700">{{ $edu['institusi'] }}</h3>
                    <p class="text-lg text-gray-600">{{ $edu['jurusan'] }} | {{ $edu['tahun'] }}</p>
                </div>
            @endforeach
        </section>

        <hr class="my-8 border-gray-300">

        

        <section>
            <h2 class="text-3xl section-title">Keterampilan (Skills)</h2>
            <div class="flex flex-wrap gap-3">
                @foreach ($data['skill'] as $skill)
                    <span class="bg-blue-100 text-blue-800 text-lg px-4 py-2 rounded-full font-medium">{{ $skill }}</span>
                @endforeach
            </div>
        </section>
    </div>
</body>
</html>