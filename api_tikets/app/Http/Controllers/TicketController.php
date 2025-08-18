<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Illuminate\Http\Request;
use App\Http\Requests\ticketStoreRequest;

class TicketController extends Controller
{
    public function index()
    {
        $tickets = Ticket::all();
        return response()->json($tickets);
    }

    public function store(ticketStoreRequest $request)
    {
        $ticket = new Ticket();

        $ticket->name_applicant = $request->input('name_applicant');
        $ticket->category = $request->input('category');
        $ticket->title = $request->input('title');
        $ticket->description = $request->input('description');
        $ticket->status = $request->input('status');
        $ticket->priority = $request->input('priority');
        $ticket->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Ticket created successfully',
        ]);
    }

    public function show(Ticket $ticket)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $ticket = Ticket::find($id);

        if (!$ticket) {
            return response()->json(['error' => 'Ticket not found'], 404);
        }

        $ticket->name_applicant = $request->input('name_applicant');
        $ticket->category = $request->input('category');
        $ticket->title = $request->input('title');
        $ticket->description = $request->input('description');
        $ticket->status = $request->input('status');
        $ticket->priority = $request->input('priority');
        $ticket->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Ticket updated successfully',
        ]);
    }

    public function destroy(Ticket $ticket)
    {
        //
    }
}
