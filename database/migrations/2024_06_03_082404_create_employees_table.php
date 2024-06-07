<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('father_name');
            $table->string('husband_name')->nullable();
            $table->string('cnic');
            $table->enum('gender',['Male','Female']);
            $table->string('doa');
            $table->string('doj');
            $table->enum('status',['active','inactive'])->default('active');
            $table->enum('verified',['Yes','No'])->default('No');
            $table->enum('station',['Provincial','District'])->nullable();
            $table->enum('is_deleted',['Yes','No'])->default('No');
            $table->foreignId('employee_type_id')->constrained('employee_types');
            $table->foreignId('facility_id')->constrained('facilities');
            $table->foreignId('district_id')->constrained('districts');
            $table->foreignId('designation_id')->constrained('designations');
            $table->foreignId('qualification_id')->constrained('qualifications');
            $table->foreignId('financial_year_id')->constrained('financial_years');
            $table->foreignId('added_by')->constrained('users');
            $table->foreignId('updated_by')->constrained('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};