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
        Schema::table('facilities', function (Blueprint $table) {
            $table->foreignId('tehsil')->nullable()->constrained('tehsils');
            $table->foreignId('union_council')->nullable()->constrained('union_councils');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('facilities', function (Blueprint $table) {
            $table->dropForeign(['tehsil']);
            $table->dropColumn('tehsil');
            $table->dropForeign(['union_council']);
            $table->dropColumn('union_council');

        });
    }
};
