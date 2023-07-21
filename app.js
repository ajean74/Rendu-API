const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(bodyParser.json());

// Simuler une base de données simple en utilisant un tableau de tournois
let tournaments = [
    {
      id: '1',
      name: 'Tournoi Valorant',
      date: '2023-03-31',
      location: 'Icebox',
      rules: '13 manches gagnantes sans overtake.',
      participants: [
        { id: '101', name: 'DeaXSharK', tagriot: '5874' },
        { id: '102', name: 'CroyMen', tagriot: 'Croy' },
        { id: '103', name: 'Kiuqsxn', tagriot: 'EUW' },
        { id: '104', name: '0ct4vy', tagriot: '9407' },
        { id: '105', name: 'C8H6BrN', tagriot: '8883' },
        { id: '106', name: 'Cloltl', tagriot: '4965' },
        { id: '107', name: 'FunkyZaWa', tagriot: '1199' },
        { id: '108', name: 'KickPlay', tagriot: 'EUW' },
        { id: '109', name: 'LaPi0che', tagriot: 'EUW' },
        { id: '110', name: 'Rehmyi', tagriot: 'ZzZ' },
        { id: '111', name: 'Pandaroux78', tagriot: '7211' },
        { id: '112', name: 'ptipiouboune', tagriot: '1629' },
        { id: '113', name: 'tomZ', tagriot: '5209' },
        { id: '114', name: 'Walaland', tagriot: 'EUW' },
        { id: '115', name: 'XKetscore', tagriot: 'EUW' },
        { id: '116', name: 'ZamanFr', tagriot: '2720' },
      ],
      matches: [
        { id: '201', participant1: '101', participant2: '102', participant3: '103', participant4: '104', participant5: '105', participant6: '106', participant7: '107', participant8: '108', participant9: '109', participant10: '110', result: '13-9' },
        { id: '202', participant1: '103', participant2: '101', participant3: '116', participant4: '112', participant5: '110', participant6: '111', participant7: '113', participant8: '114', participant9: '115', participant10: '106', result: '8-13' },
        { id: '203', participant1: '106', participant2: '103', participant3: '104', participant4: '102', participant5: '101', participant6: '105', participant7: '108', participant8: '110', participant9: '112', participant10: '114', result: '11-13' },
        { id: '204', participant1: '110', participant2: '102', participant3: '116', participant4: '105', participant5: '104', participant6: '107', participant7: '109', participant8: '111', participant9: '113', participant10: '115', result: '13-12' },
      ],
    },
  ];

// Récupérer tous les tournois
app.get('/tournaments', (req, res) => {
  res.json(tournaments);
});

// Récupérer un tournoi par son ID
app.get('/tournaments/:id', (req, res) => {
  const tournamentId = req.params.id;
  const tournament = tournaments.find((t) => t.id === tournamentId);

  if (!tournament) {
    res.status(404).json({ message: 'Tournoi non trouvé.' });
  } else {
    res.json(tournament);
  }
});

// Créer un nouveau tournoi
app.post('/tournaments', (req, res) => {
  const { name, date, location, rules } = req.body;

  if (!name || !date || !location) {
    res.status(400).json({ message: 'Le nom, la date et le lieu sont requis pour créer un tournoi.' });
  } else {
    const newTournament = {
      id: uuidv4(),
      name,
      date,
      location,
      rules: rules || '',
      participants: [],
      matches: [],
    };
    tournaments.push(newTournament);
    res.status(201).json(newTournament);
  }
});

// Mettre à jour un tournoi par son ID
app.put('/tournaments/:id', (req, res) => {
  const tournamentId = req.params.id;
  const { name, date, location, rules } = req.body;

  const tournament = tournaments.find((t) => t.id === tournamentId);

  if (!tournament) {
    res.status(404).json({ message: 'Tournoi non trouvé.' });
  } else {
    tournament.name = name || tournament.name;
    tournament.date = date || tournament.date;
    tournament.location = location || tournament.location;
    tournament.rules = rules || tournament.rules;
    res.json(tournament);
  }
});

// Supprimer un tournoi par son ID
app.delete('/tournaments/:id', (req, res) => {
  const tournamentId = req.params.id;
  tournaments = tournaments.filter((t) => t.id !== tournamentId);
  res.json({ message: 'Tournoi supprimé avec succès.' });
});

// Inscrire un participant à un tournoi par son ID
app.post('/tournaments/:id/participants', (req, res) => {
  const tournamentId = req.params.id;
  const { name, tagriot } = req.body;

  const tournament = tournaments.find((t) => t.id === tournamentId);

  if (!tournament) {
    res.status(404).json({ message: 'Tournoi non trouvé.' });
  } else {
    const newParticipant = { id: uuidv4(), name, tagriot };
    tournament.participants.push(newParticipant);
    res.status(201).json(newParticipant);
  }
});

// Récupérer tous les participants d'un tournoi par son ID
app.get('/tournaments/:id/participants', (req, res) => {
  const tournamentId = req.params.id;
  const tournament = tournaments.find((t) => t.id === tournamentId);

  if (!tournament) {
    res.status(404).json({ message: 'Tournoi non trouvé.' });
  } else {
    res.json(tournament.participants);
  }
});

// Supprimer un participant d'un tournoi par son ID
app.delete('/tournaments/:id/participants/:participantId', (req, res) => {
  const tournamentId = req.params.id;
  const participantId = req.params.participantId;

  const tournament = tournaments.find((t) => t.id === tournamentId);

  if (!tournament) {
    res.status(404).json({ message: 'Tournoi non trouvé.' });
  } else {
    tournament.participants = tournament.participants.filter((p) => p.id !== participantId);
    res.json({ message: 'Participant supprimé du tournoi avec succès.' });
  }
});

// Ajouter un match à un tournoi par son ID
app.post('/tournaments/:id/matches', (req, res) => {
  const tournamentId = req.params.id;
  const { participant1, participant2, result } = req.body;

  const tournament = tournaments.find((t) => t.id === tournamentId);

  if (!tournament) {
    res.status(404).json({ message: 'Tournoi non trouvé.' });
  } else if (!participant1 || !participant2 || !result) {
    res.status(400).json({ message: 'Les participants et le résultat sont requis pour ajouter un match.' });
  } else {
    const newMatch = { id: uuidv4(), participant1, participant2, result };
    tournament.matches.push(newMatch);
    res.status(201).json(newMatch);
  }
});

// Récupérer tous les matchs d'un tournoi par son ID
app.get('/tournaments/:id/matches', (req, res) => {
  const tournamentId = req.params.id;
  const tournament = tournaments.find((t) => t.id === tournamentId);

  if (!tournament) {
    res.status(404).json({ message: 'Tournoi non trouvé.' });
  } else {
    res.json(tournament.matches);
  }
});

// Mettre à jour le résultat d'un match par son ID
app.put('/tournaments/:id/matches/:matchId', (req, res) => {
  const tournamentId = req.params.id;
  const matchId = req.params.matchId;
  const { result } = req.body;

  const tournament = tournaments.find((t) => t.id === tournamentId);

  if (!tournament) {
    res.status(404).json({ message: 'Tournoi non trouvé.' });
  } else {
    const match = tournament.matches.find((m) => m.id === matchId);
    if (!match) {
      res.status(404).json({ message: 'Match non trouvé.' });
    } else {
      match.result = result || match.result;
      res.json(match);
    }
  }
});

// Supprimer un match d'un tournoi par son ID
app.delete('/tournaments/:id/matches/:matchId', (req, res) => {
  const tournamentId = req.params.id;
  const matchId = req.params.matchId;

  const tournament = tournaments.find((t) => t.id === tournamentId);

  if (!tournament) {
    res.status(404).json({ message: 'Tournoi non trouvé.' });
  } else {
    tournament.matches = tournament.matches.filter((m) => m.id !== matchId);
    res.json({ message: 'Match supprimé du tournoi avec succès.' });
  }
});

const port = 666;

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});