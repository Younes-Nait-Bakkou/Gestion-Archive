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
        Schema::create('modules', function (Blueprint $table) {
            $table->id();
            $table->foreignId('formateur_id');
            $table->foreignId('groupe_id');
            $table->string('code');
            $table->string('intitule');
            $table->boolean('regional')->default(false);
            $table->float('masseHoraireP')->default(0);
            $table->float('masseHoraireFAD')->default(0);
            $table->year('anneeFormation');
            $table->enum('semestre',[1,2])->default(1);
            $table->enum('status',['in progress','on hold','archived','opened'])->default('in progress');
            
            /* ---------- In Progress Required ----------- */
            $table->date('datePrevueEFM')->nullable();
            $table->boolean('EFM')->default(false);
            
            /* ---------- On Hold Required ----------- */
            $table->date('dateEFM')->nullable();

            /* ---------- Archived Required ----------- */
            $table->string('modulesDossiers')->nullable();
            $table->integer('nombreCopies')->nullable();
            $table->string('emplacementArchiv')->nullable();
            /* ------- IF status was opened */
            $table->date('dateRetour')->nullable();
            /* ---------- Opened Required ----------- */
            $table->string('motif')->nullable();
            $table->string('demandeur')->nullable();
            $table->date('dateOuverture')->nullable();
            $table->date('datePrevueRetour')->nullable();
            $table->text('remarques')->nullable();

            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('modules');
    }
};
