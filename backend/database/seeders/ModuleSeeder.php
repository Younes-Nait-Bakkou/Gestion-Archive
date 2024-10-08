<?php

namespace Database\Seeders;

use App\Models\Module;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ModuleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        Module::insert([
            [
                'formateur_id' => 1,
                'groupe_id' => 1,
                'code' => 'M101',
                'intitule' => 'Introduction to Programming',
                'regional' => true,
                'masseHoraireP' => 30,
                'masseHoraireFAD' => 20,
                'status' => 'in progress',
                'modulesDossiers' => 'Dossier1',
                'anneeFormation' => 2023,
                'semestre' => 1,
                'datePrevueEFM' => '2023-06-01',
                'EFM' => false,
                'dateEFM' => null,
                'nombreCopies' => 10,
                'emplacementArchiv' => 'Shelf A1',
                'Motif' => 'Initial Module',
                'Demandeur' => 'John Doe',
                'dateOuverture' => '2023-01-01',
                'datePrevueRetour' => '2023-07-01',
                'dateRetour' => null,
                'Remarques' => 'This module is important for basics.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'formateur_id' => 2,
                'groupe_id' => 2,
                'code' => 'M102',
                'intitule' => 'Advanced Databases',
                'regional' => false,
                'masseHoraireP' => 40,
                'masseHoraireFAD' => 25,
                'status' => 'on hold',
                'modulesDossiers' => 'Dossier2',
                'anneeFormation' => 2023,
                'semestre' => 2,
                'datePrevueEFM' => '2023-12-01',
                'EFM' => true,
                'dateEFM' => '2023-11-25',
                'nombreCopies' => 15,
                'emplacementArchiv' => 'Shelf B2',
                'Motif' => 'Advanced Course',
                'Demandeur' => 'Jane Smith',
                'dateOuverture' => '2023-02-01',
                'datePrevueRetour' => '2023-12-15',
                'dateRetour' => null,
                'Remarques' => 'Focus on SQL and NoSQL.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'formateur_id' => 3,
                'groupe_id' => 3,
                'code' => 'M103',
                'intitule' => 'Network Security',
                'regional' => true,
                'masseHoraireP' => 35,
                'masseHoraireFAD' => 30,
                'status' => 'archived',
                'modulesDossiers' => 'Dossier3',
                'anneeFormation' => 2022,
                'semestre' => 1,
                'datePrevueEFM' => '2022-05-01',
                'EFM' => true,
                'dateEFM' => '2022-04-20',
                'nombreCopies' => 5,
                'emplacementArchiv' => 'Shelf C3',
                'Motif' => 'Completed and Archived',
                'Demandeur' => 'Alice Johnson',
                'dateOuverture' => '2022-01-10',
                'datePrevueRetour' => '2022-06-01',
                'dateRetour' => '2022-05-30',
                'Remarques' => 'Module completed and archived.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'formateur_id' => 4,
                'groupe_id' => 4,
                'code' => 'M104',
                'intitule' => 'Machine Learning',
                'regional' => false,
                'masseHoraireP' => 45,
                'masseHoraireFAD' => 35,
                'status' => 'opened',
                'modulesDossiers' => 'Dossier4',
                'anneeFormation' => 2023,
                'semestre' => 2,
                'datePrevueEFM' => '2023-09-01',
                'EFM' => false,
                'dateEFM' => null,
                'nombreCopies' => 20,
                'emplacementArchiv' => 'Shelf D4',
                'Motif' => 'Ongoing Module',
                'Demandeur' => 'Bob Williams',
                'dateOuverture' => '2023-03-01',
                'datePrevueRetour' => '2023-10-01',
                'dateRetour' => null,
                'Remarques' => 'This module is currently in progress.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'formateur_id' => 5,
                'groupe_id' => 5,
                'code' => 'M105',
                'intitule' => 'Web Development',
                'regional' => true,
                'masseHoraireP' => 40,
                'masseHoraireFAD' => 20,
                'status' => 'in progress',
                'modulesDossiers' => 'Dossier5',
                'anneeFormation' => 2023,
                'semestre' => 1,
                'datePrevueEFM' => '2023-04-15',
                'EFM' => false,
                'dateEFM' => null,
                'nombreCopies' => 10,
                'emplacementArchiv' => 'Shelf E1',
                'Motif' => 'Key Skills Module',
                'Demandeur' => 'Charlie Brown',
                'dateOuverture' => '2023-01-15',
                'datePrevueRetour' => '2023-07-15',
                'dateRetour' => null,
                'Remarques' => 'Essential for frontend and backend development.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'formateur_id' => 6,
                'groupe_id' => 6,
                'code' => 'M106',
                'intitule' => 'Data Analysis',
                'regional' => false,
                'masseHoraireP' => 50,
                'masseHoraireFAD' => 30,
                'status' => 'archived',
                'modulesDossiers' => 'Dossier6',
                'anneeFormation' => 2022,
                'semestre' => 2,
                'datePrevueEFM' => '2022-10-10',
                'EFM' => true,
                'dateEFM' => '2022-09-30',
                'nombreCopies' => 8,
                'emplacementArchiv' => 'Shelf F2',
                'Motif' => 'Finished Module',
                'Demandeur' => 'Diana Prince',
                'dateOuverture' => '2022-06-01',
                'datePrevueRetour' => '2022-11-01',
                'dateRetour' => '2022-10-30',
                'Remarques' => 'Focus on data visualization tools.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'formateur_id' => 7,
                'groupe_id' => 7,
                'code' => 'M107',
                'intitule' => 'Artificial Intelligence',
                'regional' => true,            
                'masseHoraireP' => 60,
                'masseHoraireFAD' => 40,
                'status' => 'on hold',
                'modulesDossiers' => 'Dossier7',
                'anneeFormation' => 2024,
                'semestre' => 1,
                'datePrevueEFM' => '2024-03-01',
                'EFM' => false,
                'dateEFM' => null,
                'nombreCopies' => 12,
                'emplacementArchiv' => 'Shelf G3',
                'Motif' => 'Future Module',
                'Demandeur' => 'Eve Adams',
                'dateOuverture' => '2024-01-01',
                'datePrevueRetour' => '2024-06-01',
                'dateRetour' => null,
                'Remarques' => 'This module will start next semester.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'formateur_id' => 8,
                'groupe_id' => 8,
                'code' => 'M108',
                'intitule' => 'Cloud Computing',
                'regional' => false,                
                'masseHoraireP' => 45,
                'masseHoraireFAD' => 30,
                'status' => 'opened',
                'modulesDossiers' => 'Dossier8',
                'anneeFormation' => 2023,
                'semestre' => 2,
                'datePrevueEFM' => '2023-10-15',
                'EFM' => false,
                'dateEFM' => null,
                'nombreCopies' => 10,
                'emplacementArchiv' => 'Shelf H4',
                'Motif' => 'Critical Module',
                'Demandeur' => 'Frank Green',
                'dateOuverture' => '2023-08-01',
                'datePrevueRetour' => '2024-01-01',
                'dateRetour' => null,
                'Remarques' => 'Key for understanding cloud infrastructure.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'formateur_id' => 4,
                'groupe_id' => 4,
                'code' => 'M103',
                'intitule' => 'Network Security',
                'regional' => true,              
                'masseHoraireP' => 35,
                'masseHoraireFAD' => 30,
                'status' => 'archived',
                'modulesDossiers' => 'Dossier3',
                'anneeFormation' => 2022,
                'semestre' => 1,
                'datePrevueEFM' => '2022-05-01',
                'EFM' => true,
                'dateEFM' => '2022-04-20',
                'nombreCopies' => 5,
                'emplacementArchiv' => 'Shelf C3',
                'Motif' => 'Completed and Archived',
                'Demandeur' => 'Alice Johnson',
                'dateOuverture' => '2022-01-10',
                'datePrevueRetour' => '2022-06-01',
                'dateRetour' => '2022-05-30',
                'Remarques' => 'Module completed and archived.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'formateur_id' => 5,
                'groupe_id' => 5,
                'code' => 'M104',
                'intitule' => 'Machine Learning',
                'regional' => false, 
                'masseHoraireP' => 45,
                'masseHoraireFAD' => 35,
                'status' => 'opened',
                'modulesDossiers' => 'Dossier4',
                'anneeFormation' => 2023,
                'semestre' => 2,
                'datePrevueEFM' => '2023-09-01',
                'EFM' => false,
                'dateEFM' => null,
                'nombreCopies' => 20,
                'emplacementArchiv' => 'Shelf D4',
                'Motif' => 'Ongoing Module',
                'Demandeur' => 'Bob Williams',
                'dateOuverture' => '2023-03-01',
                'datePrevueRetour' => '2023-10-01',
                'dateRetour' => null,
                'Remarques' => 'This module is currently in progress.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'formateur_id' => 7,
                'groupe_id' => 7,
                'code' => 'M106',
                'intitule' => 'Data Analysis',
                'regional' => false,
                'masseHoraireP' => 50,
                'masseHoraireFAD' => 30,
                'status' => 'archived',
                'modulesDossiers' => 'Dossier6',
                'anneeFormation' => 2022,
                'semestre' => 2,
                'datePrevueEFM' => '2022-10-10',
                'EFM' => true,
                'dateEFM' => '2022-09-30',
                'nombreCopies' => 8,
                'emplacementArchiv' => 'Shelf F2',
                'Motif' => 'Finished Module',
                'Demandeur' => 'Diana Prince',
                'dateOuverture' => '2022-06-01',
                'datePrevueRetour' => '2022-11-01',
                'dateRetour' => '2022-10-30',
                'Remarques' => 'Focus on data visualization tools.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'formateur_id' => 8,
                'groupe_id' => 8,
                'code' => 'M106',
                'intitule' => 'Data Analysis',
                'regional' => false,
                'masseHoraireP' => 50,
                'masseHoraireFAD' => 30,
                'status' => 'archived',
                'modulesDossiers' => 'Dossier6',
                'anneeFormation' => 2022,
                'semestre' => 2,
                'datePrevueEFM' => '2022-10-10',
                'EFM' => true,
                'dateEFM' => '2022-09-30',
                'nombreCopies' => 8,
                'emplacementArchiv' => 'Shelf F2',
                'Motif' => 'Finished Module',
                'Demandeur' => 'Diana Prince',
                'dateOuverture' => '2022-06-01',
                'datePrevueRetour' => '2022-11-01',
                'dateRetour' => '2022-10-30',
                'Remarques' => 'Focus on data visualization tools.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'formateur_id' => 6,
                'groupe_id' => 6,
                'code' => 'M103',
                'intitule' => 'Network Security',
                'regional' => true,
                'masseHoraireP' => 35,
                'masseHoraireFAD' => 30,
                'status' => 'archived',
                'modulesDossiers' => 'Dossier3',
                'anneeFormation' => 2022,
                'semestre' => 1,
                'datePrevueEFM' => '2022-05-01',
                'EFM' => true,
                'dateEFM' => '2022-04-20',
                'nombreCopies' => 5,
                'emplacementArchiv' => 'Shelf C3',
                'Motif' => 'Completed and Archived',
                'Demandeur' => 'Alice Johnson',
                'dateOuverture' => '2022-01-10',
                'datePrevueRetour' => '2022-06-01',
                'dateRetour' => '2022-05-30',
                'Remarques' => 'Module completed and archived.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
