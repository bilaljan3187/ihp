<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\StoreDocumentRequest;
use App\Http\Requests\UpdateDocumentRequest;

class DocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDocumentRequest $request)
    {
       
        $rdata = $request->validated();
        $data['employee'] = $request->employee;
        $files = $rdata['files'] ?? null;
        //dd($files);
        if($files){
            foreach ($request->file('files') as $file) {
                $data['document'] = $file->getClientOriginalName();
                $customFileName = "{$data['employee']}-".time()."-{$data['document']}";
                $path = $file->storeAs('documents', $customFileName, 'public');
                $data['file'] = $path;
                Document::create($data);
            }
            return to_route('employee.show',$data['employee'])->with('success',"Documents  Uploaded");
        }else{
            return to_route('employee.show',$data['employee'])->with('success',"Documents Uploading Failled");
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(Document $document)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Document $document)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDocumentRequest $request, Document $document)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Document $document)
    {
        if($document){
            if (Storage::disk('public')->exists($document->file)) {
                Storage::disk('public')->delete($document->file);
            }
            $document->delete();
            return to_route('employee.show',$document->employee);
        }
    }
}