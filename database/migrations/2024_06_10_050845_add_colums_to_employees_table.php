<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use function Laravel\Prompts\table;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('employees', function (Blueprint $table) {
            $table->text('dob');
            $table->foreignId('domicile')->nullable()->constrained('districts');
            $table->text('contact_no');
            $table->text('account_no');
            $table->string('address');
            $table->foreignId('reporting_officer')->nullable()->constrained('employees');
            $table->foreignId('appointed_tehsil')->nullable()->constrained('tehsils');
            $table->foreignId('appointed_union_council')->nullable()->constrained('union_councils');
            $table->foreignId('current_district')->nullable()->constrained('districts');
            $table->foreignId('current_tehsil')->nullable()->constrained('tehsils');
            $table->foreignId('current_union_council')->nullable()->constrained('union_councils');
            $table->foreignId('current_facility')->nullable()->constrained('facilities');
            $table->string('appointed_catchment_area')->nullable();
            $table->string('current_catchment_area')->nullable();



        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('employees', function (Blueprint $table) {

            $table->dropColumn('dob');
            $table->dropColumn('contact_no');
            $table->dropColumn('account_no');
            $table->dropColumn('address');
            $table->dropForeign(['domicile']);
            $table->dropColumn('domicile');
            $table->dropForeign(['reporting_officer']);
            $table->dropColumn('reporting_officer');
            $table->dropForeign(['appointed_tehsil']);
            $table->dropColumn('appointed_tehsil');
            $table->dropForeign(['appointed_union_council']);
            $table->dropColumn('appointed_union_council');
            $table->dropForeign(['current_district']);
            $table->dropColumn('current_district');
            $table->dropForeign(['current_tehsil']);
            $table->dropColumn('current_tehsil');
            $table->dropForeign(['current_union_council']);
            $table->dropColumn('current_union_council');
            $table->dropForeign(['current_facility']);
            $table->dropColumn('current_facility');
            $table->dropColumn('appointed_catchment_area');
            $table->dropColumn('current_catchment_area');

        });
    }
};