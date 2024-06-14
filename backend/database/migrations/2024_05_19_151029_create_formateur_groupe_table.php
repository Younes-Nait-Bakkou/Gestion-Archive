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
        Schema::disableForeignKeyConstraints();
        Schema::create('formateur_groupe', function (Blueprint $table) {
            $table->foreignId('formateur_id')
                        ->constrained()
                        ->onDelete('cascade')
                        ->onUpdate('cascade');

            $table->foreignId('groupe_id')
                        ->constrained()
                        ->onDelete('cascade')
                        ->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('formateur_groupe');
    }
};
